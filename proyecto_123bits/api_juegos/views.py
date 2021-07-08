from rest_framework import viewsets
from .serializers import JuegoSerializer, UsuarioSerializer
from app123bits.models import Juego, Usuario


class JuegoViewSet(viewsets.ModelViewSet):
    queryset = Juego.objects.all().order_by('codigo')
    serializer_class = JuegoSerializer
    
class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer    
    