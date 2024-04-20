import typing
from datetime import datetime
from typing import Literal, Optional
from uuid import UUID

from sqlalchemy import ForeignKey
from sqlalchemy.orm import (
    Mapped,
    mapped_column,
    relationship,
)
from .database import Base


choices_report_status = Literal["create", "canceled", "accepted"]


class City(Base):
    """Город"""
    __tablename__ = "city"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    univers: Mapped[list["University"]] = relationship(
        back_populates="city", cascade="all, delete-orphan"
    )
    students: Mapped[list["Student"]] = relationship(
        back_populates="city", cascade="all, delete-orphan"
    )
    agents: Mapped[list["Agent"]] = relationship(
        back_populates="city", cascade="all, delete-orphan"
    )

    def __repr__(self) -> str:
        return self.name


class University(Base):
    """Университет"""
    __tablename__ = "university"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str]
    description: Mapped[Optional[str]]
    image: Mapped[bytes]  # TODO переделать на хранение на сервере
    city_id: Mapped[int] = mapped_column(ForeignKey("city.id"))
    city: Mapped["City"] = relationship(
        back_populates="univers"
    )
    faculties: Mapped[list["Faculty"]] = relationship(
        back_populates="university", cascade="all, delete-orphan"
    )
    events: Mapped[list["Event"]] = relationship(
        back_populates="university", cascade="all, delete-orphan"
    )

    def __repr__(self) -> str:
        return self.title


class Faculty(Base):
    """Факультет"""
    __tablename__ = "faculty"

    id: Mapped[int] = mapped_column(primary_key=True)
    university_id: Mapped[int] = mapped_column(ForeignKey("university.id"))
    university: Mapped[University] = relationship(
        back_populates="faculties"
    )
    title: Mapped[str]
    description: Mapped[Optional[str]]
    departments: Mapped[list["Department"]] = relationship(
        back_populates="faculty", cascade="all, delete-orphan"
    )

    def __repr__(self) -> str:
        return self.title


class Department(Base):
    """Кафедрa"""
    __tablename__ = "department"

    id: Mapped[int] = mapped_column(primary_key=True)
    faculty_id: Mapped[int] = mapped_column(ForeignKey("faculty.id"))
    faculty: Mapped[Faculty] = relationship(
        back_populates="departments"
    )
    title: Mapped[str]
    description: Mapped[Optional[str]]
    groups: Mapped[list["Group"]] = relationship(
        back_populates="department", cascade="all, delete-orphan"
    )

    def __repr__(self) -> str:
        return self.title


class Group(Base):
    """Группа"""
    __tablename__ = "group"

    id: Mapped[int] = mapped_column(primary_key=True)
    department_id: Mapped[int] = mapped_column(ForeignKey("department.id"))
    department: Mapped[Department] = relationship(
        back_populates="groups"
    )
    title: Mapped[str]
    description: Mapped[Optional[str]]
    course: Mapped[str]
    students: Mapped[list["Student"]] = relationship(
        back_populates="group", cascade="all, delete-orphan"
    )

    def __repr__(self) -> str:
        return self.title


class Student(Base):
    """Студент"""
    __tablename__ = "student"

    uid_keycloak_user: Mapped[UUID] = mapped_column(primary_key=True)
    group_id: Mapped[int] = mapped_column(ForeignKey("group.id"))
    group: Mapped[Group] = relationship(
        back_populates="students"
    )
    city_id: Mapped[int] = mapped_column(ForeignKey("city.id"))
    city: Mapped[City] = relationship(
        back_populates="students"
    )
    image: Mapped[bytes]
    description: Mapped[Optional[str]]
    achievements: Mapped[list["Achievement"]] = relationship(
        back_populates="student", cascade="all, delete-orphan"
    )


class Achievement(Base):
    """Рейтинг студента"""
    __tablename__ = "achievement"

    id: Mapped[int] = mapped_column(primary_key=True)
    student_id: Mapped[int] = mapped_column(ForeignKey("student.uid_keycloak_user"))
    student: Mapped[Student] = relationship(
        back_populates="achievements"
    )
    date: Mapped[datetime]
    event_id: Mapped[int] = mapped_column(ForeignKey("event.id"))
    event: Mapped["Event"] = relationship(
        back_populates="achievements"
    )
    stars_count: Mapped[int]  # PositiveInt
    description: Mapped[Optional[str]]

    def __repr__(self) -> str:
        return f"{self.stars_count} - {self.student} за {self.event}"


class LegalDocument(Base):
    """Документы"""
    __tablename__ = "legal_document"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    enabled: Mapped[bool]  # (включен или нет)
    version: Mapped[str]
    word_file_path: Mapped[str]
    acceptances: Mapped[list["LegalDocumentAcceptance"]] = relationship(
        back_populates="legal_document", cascade="all, delete-orphan",
    )

    def __repr__(self) -> str:
        return f"{self.name} - {self.version}"


class LegalDocumentAcceptance(Base):
    """Согласования документов"""
    __tablename__ = "legal_document_acceptance"

    id: Mapped[int] = mapped_column(primary_key=True)
    legal_document_id: Mapped[int] = mapped_column(ForeignKey("legal_document.id"))
    legal_document: Mapped[LegalDocument] = relationship(
        back_populates="acceptances"
    )
    accepted_at: Mapped[datetime]
    uid_keycloak_user: Mapped[UUID]


class UserFilter(Base):
    """Фильтр пользователей"""
    __tablename__ = "user_filter"

    uid_keycloak_user: Mapped[UUID] = mapped_column(primary_key=True)
    filter_json: Mapped[dict[str, typing.Any]]


class Organization(Base):
    """Организация"""
    __tablename__ = "organization"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    logo: Mapped[bytes]
    description: Mapped[Optional[str]]
    agents: Mapped[list["Agent"]] = relationship(
        back_populates="organization"
    )


class Agent(Base):
    """Представитель"""
    __tablename__ = "agent"

    uid_keycloak_user: Mapped[UUID] = mapped_column(primary_key=True)
    city_id: Mapped[int] = mapped_column(ForeignKey("city.id"))
    city: Mapped[City] = relationship(
        back_populates="agents"
    )
    organization_id: Mapped[int] = mapped_column(ForeignKey("organization.id"))
    organization: Mapped[Organization] = relationship(
        back_populates="agents"
    )
    image: Mapped[bytes]
    post: Mapped[str]
    description: Mapped[Optional[str]]


class EventType(Base):
    """Раздел достижений"""
    __tablename__ = "event_type"

    title: Mapped[str] = mapped_column(unique=True, primary_key=True)
    value: Mapped[int]  # Ценность
    events: Mapped[list["Event"]] = relationship(
        back_populates="event_type", cascade="all, delete-orphan"
    )
    publications: Mapped[list["Publication"]] = relationship(
        back_populates="event_type", cascade="all, delete-orphan"
    )


class Event(Base):
    """Мероприятие"""
    __tablename__ = "event"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    event_type_id: Mapped[str] = mapped_column(ForeignKey("event_type.title"))
    event_type: Mapped[EventType] = relationship(
        back_populates="events"
    )
    date: Mapped[datetime]
    description: Mapped[Optional[str]]
    university_id: Mapped[int] = mapped_column(ForeignKey("university.id"))
    university: Mapped[University] = relationship(
        back_populates="events"
    )
    achievements: Mapped[list["Achievement"]] = relationship(
        back_populates="event", cascade="all, delete-orphan"
    )
    statements: Mapped[list["Statement"]] = relationship(
        back_populates="event", cascade="all, delete-orphan"
    )


class Statement(Base):
    """Заявления на на добавление рейтинга"""
    __tablename__ = "statement"

    id: Mapped[int] = mapped_column(primary_key=True)
    date: Mapped[datetime]
    uid_keycloak_user_create: Mapped[UUID]
    uid_keycloak_user_target: Mapped[UUID]
    status: Mapped[choices_report_status]
    comment: Mapped[Optional[str]]
    event_id: Mapped[int] = mapped_column(ForeignKey("event.id"))
    event: Mapped["Event"] = relationship(
        back_populates="statements"
    )


class Publication(Base):
    """Публикация"""
    __tablename__ = "publication"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str]
    event_type_id: Mapped[str] = mapped_column(ForeignKey("event_type.title"))
    event_type: Mapped[list[EventType]] = relationship(
        back_populates="publications"
    )
    uid_keycloak_user: Mapped[UUID]
    date: Mapped[datetime]
    description: Mapped[Optional[str]]
    likes: Mapped[list["Like"]] = relationship(
        back_populates="publication", cascade="all, delete-orphan"
    )


class Like(Base):
    __tablename__ = "like"

    id: Mapped[int] = mapped_column(primary_key=True)
    publication_id: Mapped[int] = mapped_column(ForeignKey("publication.id"))
    publication: Mapped[Publication] = relationship(
        back_populates="likes",
    )
    uid_keycloak_user: Mapped[UUID]


class UsersFavorite(Base):
    __tablename__ = "usersfavorite"

    uid_keycloak_user: Mapped[UUID] = mapped_column(primary_key=True)
    ids_keycloak_favorites: Mapped[list[int]]
