from django.db import models

# Create your models here.
from django.db.models import EmailField


class Friend(models.Model):
    first_name = models.CharField(max_length=50)
    list_name = models.CharField(max_length=50)
    phone = models.IntegerField(null=True)
    email = EmailField(max_length=200, null=True)
    text = models.TextField(null=True)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    # created_date = models.DateTimeField(default=timezone.now)
    # approved_comment = models.BooleanField(default=False)

    # def approve(self):
    #     self.approved_comment = True
    #     self.save()

    def __str__(self):
        return "%s %s" % (self.first_name, self.last_name)
