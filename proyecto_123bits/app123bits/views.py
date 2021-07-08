from django.shortcuts import render, redirect
from .models import Juego
from .forms import FormularioJuego
from django.shortcuts import render, get_object_or_404

def index(request):
    return render(request, 'index.html')
    
def carro(request):
    return render(request, 'carro.html')

def contacto(request):
    return render(request, 'contacto.html')
    
def faq(request):
    return render(request, 'faq.html')
    
def formularioventa(request):
    return render(request, 'formularioVenta.html')
    
def jn64(request):
    return render(request, 'jn64.html')
    
def jnes(request):
    return render(request, 'jnes.html')
    
def jsnes(request):
    return render(request, 'jsnes.html')
    
def jsnes2(request):
    return render(request, 'jsnes2.html')
    
def registro(request):
    return render(request, 'registro.html')
    
def trabaja(request):
    return render(request, 'trabaja.html')
      
def agregarjuego(request):
    formulario = FormularioJuego()
    juego = Juego()
    if request.method == 'POST':
        nuevoJuego = FormularioJuego(request.POST, instance=juego)
        nuevoJuego.save()
        return render(request, 'index.html')
    else:
        formulario = FormularioJuego()
        return render(request, 'agregarjuego.html', {'formulario': formulario})
  
def listadojuegos(request):
    juego= Juego.objects.all()
    datos= {
        'juego': juego
    }
    return render(request, 'listadojuegos.html',datos)    

def editar_juego (request, id):
    juego= Juego.objects.get(codigo=id)
    datos={
        'formulario': FormularioJuego(instance=juego)
    }
    if request.method=='POST':
        formulario= FormularioJuego(data=request.POST, instance= juego)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje']="Juego modificado exitosamente"
            juego= Juego.objects.all()
            datos= {
                'juego': juego
            }
            return render(request, 'listadojuegos.html', datos)
            
    return render(request, 'editar_juego.html', datos)   
    
def eliminar_juego (request, id):
    juego= Juego.objects.get(codigo=id)
    juego.delete()
    
    return render(request, 'index.html')