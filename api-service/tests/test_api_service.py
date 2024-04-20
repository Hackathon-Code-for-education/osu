import pytest
from fastapi.testclient import TestClient
from api_service.schemas import User
from api_service.views import app
from api_service.auth import get_user_info

#TODO поправить тесты !
@pytest.fixture
def override_current_user():
    def override_user():
        return User(
            id=1,
            username='auth_disabled_user',
            realm_roles=['auth_disabled_role', 'admin']
        )

    app.dependency_overrides[get_user_info] = override_user

    yield

    app.dependency_overrides[get_user_info] = None

def test_secure(override_current_user):
    client = TestClient(app)

    response = client.get(f"/api/secure")
    assert response.status_code == 200
    assert response.headers["Content-Type"] == "application/json"
    assert "uid" in response.json()

