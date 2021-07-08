from django.urls import path, include
from django.conf.urls import url
from .import views


urlpatterns = [
    path('', views.index),
    path('index', views.index),
    path('carro', views.carro),
    path('contacto', views.contacto),
    path('faq', views.faq),
    path('formularioventa', views.formularioventa),
    path('jn64', views.jn64),
    path('jnes', views.jnes),
    path('jsnes', views.jsnes),
    path('jsnes2', views.jsnes2),
    path('registro', views.registro),
    path('trabaja', views.trabaja),
    path('agregarjuego', views.agregarjuego),
    path('listadojuegos', views.listadojuegos),
    path('editar_juego/<id>', views.editar_juego,name="editar_juego" ),
    path('eliminar_juego/<id>', views.eliminar_juego, name="eliminar_juego"),
]