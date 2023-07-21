package handlers

import (
	dto "LandTicket-Backend/dto/result"
	ticketdto "LandTicket-Backend/dto/ticket"
	"LandTicket-Backend/models"
	"LandTicket-Backend/repositories"
	"fmt"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

type handlersTicket struct {
	TicketRepository repositories.TicketRepository
}

func HandlerTicket(TicketRepositories repositories.TicketRepository) *handlersTicket {
	return &handlersTicket{TicketRepositories}
}

func (h *handlersTicket) CreateTicket(c echo.Context) error {
	startStationID, _ := strconv.Atoi(c.FormValue("start_station_id"))
	destinationStationID, _ := strconv.Atoi(c.FormValue("destination_station_id"))
	price, _ := strconv.Atoi(c.FormValue("price"))
	qty, _ := strconv.Atoi(c.FormValue("qty"))

	ticket := models.Ticket{
		NameTrain:            c.FormValue("name_train"),
		TypeTrain:            c.FormValue("type_train"),
		StartDate:            c.FormValue("start_date"),
		StartStationID:       startStationID,
		StartTime:            c.FormValue("start_time"),
		DestinationStationID: destinationStationID,
		ArrivalTime:          c.FormValue("arrival_time"),
		Price:                price,
		Qty:                  qty,
	}

	validation := validator.New()
	err := validation.Struct(ticket)

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	data, err := h.TicketRepository.CreateTicket(ticket)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: convertResponseTicket(data)})
}

func (h *handlersTicket) FindTicket(c echo.Context) error {
	ticket, err := h.TicketRepository.FindTicket()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: ticket})
}

func (h *handlersTicket) GetTicket(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	ticket, err := h.TicketRepository.GetTicket(id)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: convertResponseTicket(ticket)})
}

func (h *handlersTicket) GetMyTicket(c echo.Context) error {
	claims := c.Get("userLogin")
	id := claims.(jwt.MapClaims)["id"].(float64)
	userID := int(id)

	ticket, err := h.TicketRepository.GetMyTicket(userID)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: ticket})
}

func (h *handlersTicket) FilterTicket(c echo.Context) error {
	startStationIDParam := c.QueryParam("start_station_id")
	destinationStationIDParam := c.QueryParam("destination_station_id")

	var startStationID int
	if startStationIDParam != "" {
		var err error
		startStationID, err = strconv.Atoi(startStationIDParam)
		if err != nil {
			return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: "Invalid start_station_id"})
		}
	}

	fmt.Println(startStationID)

	var destinationStationID int
	if destinationStationIDParam != "" {
		var err error
		destinationStationID, err = strconv.Atoi(destinationStationIDParam)
		if err != nil {
			return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: "Invalid destination_station_id"})
		}
	}

	fmt.Println(destinationStationID)

	ticket, err := h.TicketRepository.FilterTicket(startStationID, destinationStationID)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: ticket})
}

func convertResponseTicket(t models.Ticket) ticketdto.TicketResponse {
	return ticketdto.TicketResponse{
		ID:                   t.ID,
		NameTrain:            t.NameTrain,
		TypeTrain:            t.TypeTrain,
		StartDate:            t.StartDate,
		StartStationID:       t.StartStationID,
		StartTime:            t.StartTime,
		DestinationStationID: t.DestinationStationID,
		ArrivalTime:          t.ArrivalTime,
		Price:                t.Price,
		Qty:                  t.Qty,
	}
}
