package repositories

import (
	"LandTicket-Backend/models"

	"gorm.io/gorm"
)

type AuthRepository interface {
	CreateUser(user models.User) (models.User, error)
	Login(email string) (models.User, error)
	CheckAuth(ID int) (models.User, error)
}

func RepositoryAuth(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) CreateUser(user models.User)(models.User, error){
	err := r.db.Create(&user).Error

	return user, err
}

func (r *repository) Login(Username string)(models.User, error){
	var user models.User
	err := r.db.First(&user, "username=?", Username).Error

	return user, err
}

func (r *repository) CheckAuth(ID int) (models.User, error){
	var user models.User
	err := r.db.First(&user, ID).Error

	return user, err
}