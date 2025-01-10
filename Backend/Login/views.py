from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout, login, authenticate
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
# Create your views here.
def home(request):
    return render(request, 'login/home.html')

@login_required
def products(request):
    return render(request, 'login/products.html')

def exit(request):
    logout(request)
    return redirect('home')
@csrf_exempt 
def login_view(request):
     if request.method == 'POST':
        data = json.loads(request.body)  # Cargar los datos JSON enviados desde Angular
        email = data.get('email')
        password = data.get('password')

        user = authenticate(username=email, password=password)  # Autenticación usando el email

        if user is not None:
            login(request, user)  # Iniciar sesión si las credenciales son correctas
            return JsonResponse({'message': 'Inicio de sesión exitoso'}, status=200)
        else:
            return JsonResponse({'error': 'Credenciales incorrectas'}, status=400)

        return JsonResponse({'error': 'Método no permitido'}, status=405)