package models

type Transaction struct {
	ID       int    `json:"id" gorm:"primarykey:autoIncrement"`
	UserId   int    `json:"user_id"`
	User     User   `json:"user" gorm:"foreignKey:UserId"`
	TicketId int    `json:"ticket_id"`
	Ticket   Ticket `json:"ticket" gorm:"foreignKey:TicketId"`
	Status   string `json:"status" gorm:"default:'pending'"`
}