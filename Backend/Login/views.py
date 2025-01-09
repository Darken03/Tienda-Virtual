from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User

class UserListView(APIView):    
    def get(self, request):
        User = User.objects.all()
        return Response({"User": [{"Usuario": User.usuario, "Email": User.email} for user in User]})
