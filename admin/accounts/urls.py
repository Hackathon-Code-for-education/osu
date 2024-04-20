from django.urls import path

from accounts.views import (
    AccountLogin, AccountLogout, AccountRegister #, lk, paid
)

app_name = 'accounts'

urlpatterns = [
    path('login/', AccountLogin.as_view(), name='login'),
    path('register/', AccountRegister.as_view(), name='register'),
    path('logout/', AccountLogout.as_view(), name='logout'),
]
