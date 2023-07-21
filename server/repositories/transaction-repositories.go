package repositories

import (
	"LandTicket-Backend/models"

	"gorm.io/gorm"
)

type TransactionRepository interface {
	CreateTransaction(transaction models.Transaction) (models.Transaction, error)
	UpdateTransaction(status string, ID int) (models.Transaction, error)
	FindTransaction() ([]models.Transaction, error)
	GetTransaction(ID int) (models.Transaction, error)
	GetPayment(transaction models.Transaction) (models.Transaction, error)
	DeleteTransaction(transaction models.Transaction, ID int) (models.Transaction, error)
	GetTransactionByUser(UserID int) ([]models.Transaction, error)
}

func RepositoryTransaction(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) CreateTransaction(transaction models.Transaction) (models.Transaction, error) {
	err := r.db.Create(&transaction).Error

	return transaction, err
}

func (r *repository) UpdateTransaction(status string, ID int) (models.Transaction, error) {
	var transaction models.Transaction

	r.db.First(&transaction, ID)

	if status != transaction.Status && status == "success" {
		r.db.First(&transaction, transaction.ID)
	}

	transaction.Status = status
	err := r.db.Save(&transaction).Error

	return transaction, err
}

func (r *repository) FindTransaction() ([]models.Transaction, error) {
	var transaction []models.Transaction
	err := r.db.Preload("User").Preload("Ticket").Preload("Ticket.StartStation").Preload("Ticket.DestinationStation").Find(&transaction).Error

	return transaction, err
}

func (r *repository) GetTransaction(ID int) (models.Transaction, error) {
	var transaction models.Transaction
	err := r.db.Preload("User").Preload("Ticket").Preload("Ticket.StartStation").Preload("Ticket.DestinationStation").First(&transaction, ID).Error

	return transaction, err
}

func (r *repository) GetTransactionByUser(UserID int) ([]models.Transaction, error) {
	var transaction []models.Transaction
	err := r.db.Preload("User").Preload("Ticket").Preload("Ticket.StartStation").Preload("Ticket.DestinationStation").Where("user_id = ?", UserID).Find(&transaction).Error

	return transaction, err
}

func (r *repository) GetPayment(transaction models.Transaction)(models.Transaction, error){
	err := r.db.Save(&transaction).Error

	return transaction, err
}

func (r *repository) DeleteTransaction(transaction models.Transaction, ID int)(models.Transaction, error){
	err := r.db.Delete(&transaction, ID).Error

	return transaction, err
}