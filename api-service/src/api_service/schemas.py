from pydantic import (
    BaseModel,
    Field,
)

from typing import List, Optional


class VersionModel(BaseModel):
    """Версия API"""
    version: str = Field(default=None, title='Версия', description='Номер версии в виде X.Y[.Z]')


class User(BaseModel):
    id: Optional[str]
    username: Optional[str] = None
    email: Optional[str] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    realm_roles: Optional[list] = None
    client_roles: Optional[list] = None


class CategorySchema(BaseModel):
    id: Optional[int] = Field(default=None, primary_key=True, nullable=False)
    name: str = Field(title="CategoryName")
    description: str = Field(default="", title="CategoryDescription")

    class Config:
        from_attributes = True
