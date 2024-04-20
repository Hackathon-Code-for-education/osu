from django.contrib import admin
from .models import City, University, Faculty, Department, Group, Student, LegalDocument, LegalDocumentAcceptance, Organization, Agent, Publication, Like

# Настройка для города
@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

# Настройка для университета
@admin.register(University)
class UniversityAdmin(admin.ModelAdmin):
    list_display = ('title', 'city')
    list_filter = ('city',)
    search_fields = ('title',)

# Настройка для факультета
@admin.register(Faculty)
class FacultyAdmin(admin.ModelAdmin):
    list_display = ('title', 'university')
    list_filter = ('university',)
    search_fields = ('title',)

# Настройка для кафедры
@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('title', 'faculty')
    list_filter = ('faculty',)
    search_fields = ('title',)

# Настройка для группы
@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    list_display = ('title', 'department', 'course')
    list_filter = ('department', 'course')
    search_fields = ('title',)

# Настройка для студента
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('uid_keycloak_user', 'group', 'city')
    list_filter = ('group', 'city')
    search_fields = ('uid_keycloak_user',)

# Настройка для документа
@admin.register(LegalDocument)
class LegalDocumentAdmin(admin.ModelAdmin):
    list_display = ('document_type', 'enabled', 'version')
    list_filter = ('enabled',)
    search_fields = ('document_type', 'version')

# Настройка для согласования документа
@admin.register(LegalDocumentAcceptance)
class LegalDocumentAcceptanceAdmin(admin.ModelAdmin):
    list_display = ('LegalDocument', 'accepted_at', 'uid_keycloak_user')
    list_filter = ('accepted_at',)
    search_fields = ('uid_keycloak_user',)

# Настройка для организации
@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

# Настройка для представителя
@admin.register(Agent)
class AgentAdmin(admin.ModelAdmin):
    list_display = ('uid_keycloak_user', 'city', 'organization')
    list_filter = ('city', 'organization')
    search_fields = ('uid_keycloak_user',)

# Настройка для публикации
@admin.register(Publication)
class PublicationAdmin(admin.ModelAdmin):
    list_display = ('uid_keycloak_user', 'datetime', 'anonymous')
    list_filter = ('datetime', 'anonymous')
    search_fields = ('uid_keycloak_user', 'description')