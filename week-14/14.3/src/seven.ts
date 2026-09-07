// Exclude in typescript
// it is a function that can accept several types of input but you want to exclude specific types from being passed to it.

type EventType = 'click' | 'sctoll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: EventType) => {
    console.log(`Handling event: ${event}`)
}

handleEvent('click');
// handleEvent('scroll'); //will throw error as it is excluded