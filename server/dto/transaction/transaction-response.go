package transaction

import "LandTicket-Backend/models"

type TransactionResponse struct {
	ID       int `json:"id"`
	UserId   int `json:"user_id"`
	User     models.User `json:"user"`
	TicketId int    `json:"ticket_id"`
	Ticket models.Ticket `json:"ticket"`
	Image    string `json:"image"`
	Status   string `json:"status"`
}