package handlers

import (
	dto "LandTicket-Backend/dto/result"
	usersdto "LandTicket-Backend/dto/users"
	"LandTicket-Backend/models"
	"LandTicket-Backend/repositories"
	"net/http"
	"strconv"

	
	"github.com/labstack/echo/v4"
)

type handler struct {
	UserRepository repositories.UserRepository
}

func HandlerUser(UserRepository repositories.UserRepository) *handler {
	return &handler{UserRepository}
}

func (h *handler) FindUsers(c echo.Context) error {
	users, err := h.UserRepository.FindUser()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: users})
}

func (h *handler) GetUser(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	user, err := h.UserRepository.GetUser(id)
	
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: convertResponse(user)})
}

func convertResponse(u models.User) usersdto.UserResponse {
	return usersdto.UserResponse{
		ID: u.ID,
		Fullname: u.Fullname,
		Username: u.Username,
		Email: u.Email,
		Password: u.Password,
	}
}