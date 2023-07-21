package usersdto

type CreateUserRequest struct {
	Fullname     string `json:"fullname" form:"fullname" validate:"required"`
	Username     string `json:"username" form:"username" validate:"required"`
	Email        string `json:"email" form:"email" validate:"required"`
	Password     string `json:"password" form:"password" validate:"required"`
	JenisKelamin string `json:"jenis_kelamin" form:"jenisKelamin" validate:"required"`
	Telepon      string `json:"telepon" form:"telepon" validate:"required"`
	Alamat       string `json:"alamat" form:"alamat" validate:"required"`
}
