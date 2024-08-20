from django.contrib.auth.backends import BaseBackend
from .models import contact 

class CustomBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None):
        print(f'Attempting to authenticate user: {username}')
        try:
            user = contact.objects.get(username=username)
            print(f'User found: {user}')
            if user.check_password(password):  
                print('Password is valid')
                return user
            else:
                print('pasword is invalid')
        except contact.DoesNotExist:
            print('User does not exist')
            return None

    def get_user(self, user_id):
        try:
            return contact.objects.get(pk=user_id)
        except contact.DoesNotExist:
            return None
        
        
class ContactBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = contact.objects.get(username=username)
            if user.check_password(password):
                return user
        except contact.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return contact.objects.get(pk=user_id)
        except contact.DoesNotExist:
            return None