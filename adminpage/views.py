from django.shortcuts import render
from .models import Request, Plan, SelectedTheme, UploadedTheme
from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseRedirect
import json
from django.views.decorators.csrf import csrf_exempt

# @csrf_exempt
# def plan(request):
#     if request.method == 'POST':
#         # print(request.FILES.getlist('plan'))
#         for afile in request.FILES.getlist('plan'):
#             files = Plan()
#             files.photo = afile
#             files.save()
#         return HttpResponse(status=200)
#     else:
#         return HttpResponseNotAllowed(['POST'])

# @csrf_exempt
# def themeSelect(request):
#     if request.method == 'POST':
#         print(request.POST.getlist('theme'))
#         for afile in request.POST.getlist('theme'):
#             images = SelectedTheme()
#             images.photo = afile
#             images.save()
#         return HttpResponse(status=200)
#     else:
#         return HttpResponseNotAllowed(['POST'])
        
# @csrf_exempt
# def themeUpload(request):
#     if request.method == 'POST':
#         print(request.FILES.getlist('theme'))
#         for afile in request.FILES.getlist('theme'):
#             images = UploadedTheme()
#             images.photo = afile
#             images.save()
#         return HttpResponse(status=200)
#     else:
#         return HttpResponseNotAllowed(['POST'])


@csrf_exempt
def request(request):
    if request.method == 'POST':
        #변수 받아오기
        
        floor_type = request.POST.get('floor_type')
        commercial_type = request.POST.get('commercial_type')
        floor_number = request.POST.get('floor_number')
        floor_size = request.POST.get('floor_size')
        floor_size_unit = request.POST.get('floor_size_unit')
        floor_height = request.POST.get('floor_height')
        floor_height_unit = request.POST.get('floor_height_unit')
        floor_address = request.POST.get('floor_address')
        add_request = request.POST.get('add_req')

        newRequest = Request.objects.create(
            floor_type = floor_type,
            commercial_type = commercial_type,
            floor_number = floor_number,
            floor_size = floor_size,
            floor_size_unit = floor_size_unit,
            floor_height = floor_height,
            floor_height_unit = floor_height_unit, 
            floor_address = floor_address,
            add_request = add_request
        )

        #file 처리 
        for afile in request.FILES.getlist('floor_plan'):
            files = Plan()
            files.photo = afile
            files.save()
            newRequest.floor_plan.add(files)
            newRequest.save()

        for afile in request.FILES.getlist('floor_theme'):
            files = UploadedTheme()
            files.photo = afile
            files.save()
            newRequest.floor_theme.add(files)
            newRequest.save()
        
        return HttpResponse(status=200)
    else:
        return HttpResponseNotAllowed(['POST'])



def index(request):
    return render(request, 'adminpage/index.html')