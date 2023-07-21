package authdto

type UserResponse struct {
	ID           int    `json:"id"`
	Fullname     string `json:"fullname"`
	Username     string `json:"username"`
	Email        string `json:"email"`
	Password     string `json:"password"`
	JenisKelamin string `json:"jenis_kelamin"`
	Telepon      string `json:"telepon"`
	Alamat       string `json:"alamat"`
}

type LoginResponse struct {
	Username string `gorm:"type: varchar(255)" json:"username"`
	Token    string `gorm:"type: varchar(255)" json:"token"`
	Role     string `gorm:"type: varchar(255)" json:"role"`
}