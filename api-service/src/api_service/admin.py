from sqladmin import ModelView
from .models import Student, City


class StudentAdmin(ModelView, model=Student):
    column_list = [Student.uid_keycloak_user, Student.description, Student.image]

class CityAdmin(ModelView, model=City):
    column_list = [City.id, City.name]
