from django.shortcuts import render
from .models import Plan, SelectedTheme, UploadedTheme
from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseRedirect
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def plan(request):
    if request.method == 'POST':
        # print(request.FILES.getlist('plan'))
        for afile in request.FILES.getlist('plan'):
            files = Plan()
            files.photo = afile
            files.save()
        return HttpResponse(status=200)
    else:
        return HttpResponseNotAllowed(['POST'])

@csrf_exempt
def themeSelect(request):
    if request.method == 'POST':
        print(request.POST.getlist('theme'))
        for afile in request.POST.getlist('theme'):
            images = SelectedTheme()
            images.photo = afile
            images.save()
        return HttpResponse(status=200)
    else:
        return HttpResponseNotAllowed(['POST'])
        
@csrf_exempt
def themeUpload(request):
    if request.method == 'POST':
        print(request.FILES.getlist('theme'))
        for afile in request.FILES.getlist('theme'):
            images = UploadedTheme()
            images.photo = afile
            images.save()
        return HttpResponse(status=200)
    else:
        return HttpResponseNotAllowed(['POST'])


def index(request):
    return render(request, 'adminpage/index.html')