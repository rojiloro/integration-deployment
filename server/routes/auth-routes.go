package routes

import (
	"LandTicket-Backend/handlers"
	"LandTicket-Backend/pkg/middleware"
	"LandTicket-Backend/pkg/mysql"
	"LandTicket-Backend/repositories"

	"github.com/labstack/echo/v4"
)

func AuthRoutes(e *echo.Group) {
	AuthRepository := repositories.RepositoryAuth(mysql.DB)
	h := handlers.HandlerAuth(AuthRepository)

	e.POST("/register", h.CreateUser)
	e.POST("/login", h.Login)
	e.GET("/check/auth", middleware.Auth(h.CheckAuth))
}