from django.db import models


# Модель города
class City(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Город'
        verbose_name_plural = 'Города'


# Модель университета
class University(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='universities/')
    city = models.ForeignKey(City, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Университет'
        verbose_name_plural = 'Университеты'


# Модель факультета
class Faculty(models.Model):
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Факультет'
        verbose_name_plural = 'Факультеты'

# Модель кафедры
class Department(models.Model):
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Кафедрa'
        verbose_name_plural = 'Кафедры'

# Модель группы
class Group(models.Model):
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    course = models.IntegerField()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'группа'
        verbose_name_plural = 'группы'

# Модель студента
class Student(models.Model):
    uid_keycloak_user = models.CharField(max_length=255)
    group = models.ForeignKey(Group, on_delete=models.SET_NULL, null=True, blank=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='students/')
    description = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = 'студент'
        verbose_name_plural = 'студенты'

# Модель документа
class LegalDocument(models.Model):
    document_type = models.CharField(max_length=255)
    enabled = models.BooleanField(default=True)
    version = models.CharField(max_length=255)
    word_file = models.FileField(upload_to='legal_documents/')

    class Meta:
        verbose_name = 'Документ'
        verbose_name_plural = 'Документы'

# Модель согласования документа
class LegalDocumentAcceptance(models.Model):
    LegalDocument = models.ForeignKey(LegalDocument, on_delete=models.CASCADE)
    accepted_at = models.DateField()
    uid_keycloak_user = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'согласования факта участия'
        verbose_name_plural = 'согласования факта участия'

# Модель организации (вуза)
class Organization(models.Model):
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='organizations/')
    description = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = 'Вуз'
        verbose_name_plural = 'Вузы'

# Модель представителя
class Agent(models.Model):
    uid_keycloak_user = models.CharField(max_length=255)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='agents/')
    post = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Сотрудники'

# Модель публикации
class Publication(models.Model):
    uid_keycloak_user = models.CharField(max_length=255)
    datetime = models.DateTimeField()
    description = models.TextField()
    anonymous = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'публикация'
        verbose_name_plural = 'публикации'

# Модель лайка
class Like(models.Model):
    publication = models.ForeignKey(Publication, on_delete=models.CASCADE)
    id_keycloak_user = models.IntegerField()
# university (Университет)
# title: str
# description: str null=true
# image: image
# images: image
# city: f-key

# faculty (факультет)
# university: f-key
# title: str
# description null=true

# department (кафедрa)
# faculty: f-key
# title: str
# description: str null=true

# group (группа)
# department f-key
# title: str
# description: str null=true
# course: int (курс)

# city (город)
# name: str


# student (Студент)
# uid_keycloak_user: str
# group: f-key null=true
# city: f-key
# image: image
# description null=true

# LegalDocument (Документы)
# document_type: str (authorisation, registration, ...)
# enabled: bool (включен или нет)
# version: str (версия документа)
# word_file: file (сам файл документа для подписания)

# LegalDocumentAcceptance (согласования факта участия в мероприятии)
# LegalDocument: f-key
# accepted_at: date
# uid_keycloak_user: str


# organization (вуз)
# name: str
# logo: image
# description: str null=true

# agent (представитель)
# uid_keycloak_user: str
# city: f-key
# organization: f-key
# image: image
# post: str (должность)
# description: str null=true


# Publication
# uid_keycloak_user: str (кто опубликовал) если не анонимно
# datetime: datetime
# description: str
# anonymous: bool

# like
# Publication: f-key
# id_keycloak_user: int
