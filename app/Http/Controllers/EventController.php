<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use App\Http\Requests\StoreEventRequest;
use Illuminate\Support\Facades\Mail;
use App\Mail\EventAssigned;
class EventController extends Controller
{
    public function index()
    {
        return Event::with('user')->get();
    }

    public function store(StoreEventRequest $request)
    {
        $event = Event::create($request->validated() + ['user_id' => auth()->id()]);
        Mail::to(auth()->user())->send(new EventAssigned($event));
        return response()->json($event, 201);
    }

    public function show($id)
    {
        $event = Event::findOrFail($id);
        return response()->json($event);
    }

    public function update(Event $event,StoreEventRequest $request)
    {
        $event->update($request->all());
        return response()->json($event);
    }

    public function destroy(Event $event)
    {
        $event->delete();
        return response()->json(null, 204);
    }

}
