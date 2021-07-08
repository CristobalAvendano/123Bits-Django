from rest_framework import serializers
from app123bits.models import Juego, Usuario

class JuegoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Juego
        fields = ('codigo','nombre', 'consola',
                  'valor', 'estado')
                  
                  
class UsuarioSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Usuario
        fields = ('nombre' , 'apellido', 'correo', 'contrasena', 'contrasena2', 'consola')