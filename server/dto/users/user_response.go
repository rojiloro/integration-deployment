package usersdto

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