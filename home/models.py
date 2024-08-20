from django.db import models
from django.contrib.auth.models import AbstractBaseUser , BaseUserManager , PermissionsMixin
from django.contrib.auth.hashers import make_password, check_password
from django.conf import settings
# Create your models here.
class contact(models.Model):
    username = models.CharField(max_length=255)
    email = models.EmailField()
    rollno = models.CharField(max_length=20)
    password = models.CharField(max_length=100)
    last_login = models.DateTimeField(auto_now=True, editable=False, blank=True)
    

    # def __str__(self):
    #     return self.password
    
    def set_password(self, raw_password):
        self.password = make_password(raw_password)
        print(f'Setting password for {self.username}: {self.password}')
        self.save()

    def check_password(self, raw_password): #mightyraju
        result = check_password(raw_password, self.password)
        print(f'Checking password for {self.username}: {result}')  # Debugging line
        return result
        

class contactUs(models.Model):
    Date = models.DateField()
    Email = models.EmailField()
    TableNo = models.IntegerField()
    Query = models.CharField(max_length=300)

    def __str__(self):
        return self.Date
    


