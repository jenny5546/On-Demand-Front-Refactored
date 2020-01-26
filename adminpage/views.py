from django.shortcuts import render
from .models import FloorPlan
from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseRedirect
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def plan(request):
    if request.method == 'POST':
        req_data = json.loads(request.body.decode())
        plan = req_data['plan']

        newFloorPlan = FloorPlan.objects.create(
            photo = plan
        )
        newFloorPlan.save()
        return HttpResponse(status=200)
    else:
        return HttpResponseNotAllowed(['POST'])

def index(request):
    return render(request, 'adminpage/index.html')