from django.db import models

class User(models.Model):
    correo = models.CharField(max_length=255)
    usuario = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.title
