import uvicorn
from .schemas import VersionModel, User, CategorySchema
from fastapi import (
    FastAPI,
    Depends
)
from fastapi.responses import (
    Response,
    JSONResponse,
)
from .auth import get_user_info
from sqladmin import Admin, ModelView
from .database import engine
from .admin import StudentAdmin, CityAdmin


description = 'API для ФРОНТА'


app = FastAPI(
    title='API Service',
    version='0.1',
    description=description,
)

admin = Admin(app, engine)

admin.add_view(StudentAdmin)
admin.add_view(CityAdmin)



@app.get(
    '/version',
    description='Возвращает версию API',
    responses={
        200: {'description': 'Версия API', 'content': {'application/json': {'example': '0.1.0'}}}
    }
)
async def get_version(
) -> VersionModel:
    return VersionModel(
        version=app.version
    )


@app.get("/secure")
async def root(user: User = Depends(get_user_info)):
    return {"message": f"Hello {user.username} you have the following service: {user.realm_roles}"}


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8020)
