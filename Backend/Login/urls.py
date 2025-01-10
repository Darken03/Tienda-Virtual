
from django.urls import path
from login.views import home, products, exit, login_view
urlpatterns = [
  path('', home, name='home'),
  path('products/', products, name='products'),
  path('exit/', exit, name='exit'),
  path('ingresar/', login_view, name='login_view')
]
