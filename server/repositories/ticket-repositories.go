package repositories

import (
	"LandTicket-Backend/models"

	"gorm.io/gorm"
)

type TicketRepository interface {
	CreateTicket(ticket models.Ticket) (models.Ticket, error)
	FindTicket() ([]models.Ticket, error)
	GetTicket(ID int) (models.Ticket, error)
	GetMyTicket(ID int) (models.Ticket, error)
	FilterTicket(StartStationID, DestinationStationID int) ([]models.Ticket, error)
}

func RepositoryTicket(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) CreateTicket(ticket models.Ticket) (models.Ticket, error) {
	err := r.db.Preload("Station").Create(&ticket).Error

	return ticket, err
}

func (r *repository) FindTicket() ([]models.Ticket, error) {
	var ticket []models.Ticket
	err := r.db.Preload("StartStation").Preload("DestinationStation").Find(&ticket).Error

	return ticket, err
}

func (r *repository) GetTicket(ID int) (models.Ticket, error) {
	var ticket models.Ticket
	err := r.db.Preload("StartStation").Preload("DestinationStation").First(&ticket, ID).Error

	return ticket, err
}

func (r *repository) GetMyTicket(ID int) (models.Ticket, error) {
	var tickets models.Ticket
	err := r.db.Where("user_id=?", ID).Preload("StartStation").Preload("DestinationStation").Preload("User").First(&tickets).Error

	return tickets, err
}

func (r *repository) FilterTicket(StartStationID, DestinationStationID int) ([]models.Ticket, error) {
	var tickets []models.Ticket
	err := r.db.Where("start_station_id = ? AND destination_station_id = ?", StartStationID, DestinationStationID).Preload("StartStation").Preload("DestinationStation").Find(&tickets).Error

	return tickets, err
}
