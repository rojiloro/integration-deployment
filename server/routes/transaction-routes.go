package routes

import (
	"LandTicket-Backend/handlers"
	"LandTicket-Backend/pkg/middleware"
	"LandTicket-Backend/pkg/mysql"
	"LandTicket-Backend/repositories"

	"github.com/labstack/echo/v4"
)

func TransactionRoutes(e *echo.Group) {
	t := repositories.RepositoryTransaction(mysql.DB)
	u := repositories.RepositoryUser(mysql.DB)
	h := handlers.HandlerTransaction(t, u)

	e.POST("/transaction", middleware.Auth(h.CreateTransaction))
	e.GET("/transaction", h.FindTransaction)
	e.GET("/transaction/:id", h.GetTransaction)
	e.GET("/transaction-user", middleware.Auth(h.GetTransactionByUser))
	e.DELETE("/transaction/:id", h.DeleteTransaction)
	e.GET("/getpayment/:id", h.GetPayment)
	e.POST("/notification", h.Notification)
}
