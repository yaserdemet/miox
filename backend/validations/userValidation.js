const z = require("zod");

const userSchema = z.object({
  name: z.string().min(3, "Minimum 3 karakter"),
  surname: z.string().min(2, "Minimum 2 karakter"),
  role: z.string().min(3, "Minimum 3 karakter"),
  phoneNumber: z.number({ invalid_type_error: "Geçersiz telefon numarası" }),
  education: z.string().min(3, "Minimum 3 karakter"),
  age: z.number().min(18, "Yaş en az 18 olmalıdır"),
});

const userValidation = (req, res, next) => {
  try {
    userSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validasyon hatası",
        errors: error.errors.map((err) => ({
          field: err.path[0],
          message: err.message,
        })),
      });
    }
    next(error);
  }
};

module.exports = userValidation;
