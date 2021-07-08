from django.db import models

class Juego(models.Model):

    codigo = models.CharField(max_length=10, null=False, primary_key=True)
    nombre = models.CharField(max_length=50,default='')
    NIN = 'Nintendo'
    SEGA = 'Sega'
    PS = 'PlayStation'
    XBOX = 'Xbox'
    consolas = [(NIN, 'Nintendo'), (SEGA, 'Sega'), (PS, 'PlayStation'), (XBOX, 'Xbox'), ]  
    consola = models.CharField(max_length=50,choices=consolas, default='-- Seleccione --',)
    valor = models.IntegerField(default=0)
    N = 'Nuevo'
    U = 'Usado'
    estados = [(N, 'Nuevo'), (U, 'Usado')]
    estado = models.CharField(max_length=50,choices=estados, default='-- Seleccione --')
   
    
    def __str__(self):

        return self.nombre + ' , ' + self.consola 
        
class Usuario(models.Model):
 
    nombre = models.CharField(max_length=100, default='')
    apellido = models.CharField(max_length=100, default='')
    correo = models.EmailField(max_length=60, default='')
    contrasena = models.CharField(max_length=20, default='')
    contrasena2 = models.CharField(max_length=20, default='')
    NIN = 'Nintendo'
    SEGA = 'Sega'
    PS = 'PlayStation'
    XBOX = 'Xbox'
    consolas = [(NIN, 'Nintendo'), (SEGA, 'Sega'), (PS, 'PlayStation'), (XBOX, 'Xbox'), ] 
    consola = models.CharField(max_length=50,choices=consolas, default='-- Seleccione --',)
    
    def __str__(self):
        return self.nombre + ' ' + self.apellido