package authdto

type CreateAuthRequest struct {
	Fullname     string `json:"fullname" form:"fullname" validate:"required"`
	Username     string `json:"username" form:"username" validate:"required"`
	Email        string `json:"email" form:"email" validate:"required"`
	Password     string `json:"password" form:"password" validate:"required"`
	JenisKelamin string `json:"jenis_kelamin" form:"jenis_kelamin" validate:"required"`
	Telepon      string `json:"telepon" form:"telepon" validate:"required"`
	Alamat       string `json:"alamat" form:"alamat" validate:"required"`
}

type UpdateAuthRequest struct {
	Fullname string `json:"fullname" form:"fullname"`
	Username string `json:"username" form:"username"`
	Email    string `json:"email" form:"email"`
	Password string `json:"password" form:"password"`
}

type AuthRequest struct {
	Username string `json:"username" validate:"required"`
	Email    string `json:"email" validate:"required"`
	Password string `json:"password" validate:"required"`
}

type LoginRequest struct {
	Username string `json:"username" validate:"required"`
	Password string `json:"password" validate:"required"`
}