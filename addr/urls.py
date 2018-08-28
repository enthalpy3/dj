from django.conf.urls import url
from . import views



urlpatterns = [
url(r'^addr/', views.addr_new, name='addr_new'),
]