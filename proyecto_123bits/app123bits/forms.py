from django import forms
from .models import Juego

class FormularioJuego(forms.ModelForm):
    class Meta:
        model = Juego
        fields = ('codigo','nombre', 'consola',
                  'valor', 'estado')