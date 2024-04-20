import os
import logging
import typing

from sqlalchemy import create_engine, JSON
from sqlalchemy.orm import (
    DeclarativeBase,
    scoped_session,
    sessionmaker,
)


DB_URL = os.environ.get(
    'DB_URL',
    'postgresql://postgres@main-db:5432/postgres'
)  # Изменить имя хоста и порт для локального запуска autogenerate
logging.info(f'{DB_URL=}s')


class Base(DeclarativeBase):
    type_annotation_map = {
        dict[str, typing.Any]: JSON,
        list[int]: JSON
    }


engine = create_engine(DB_URL)
session = scoped_session(sessionmaker(bind=engine))


def get_session():
    try:
        yield session
    except Exception as err:
        session.rollback()
        raise err
    finally:
        session.remove()
