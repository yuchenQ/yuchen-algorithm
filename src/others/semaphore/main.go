package semaphore

import "sync"

type Semaphore struct {
	ch chan struct{}
	wg *sync.WaitGroup
}

func NewSemaphore(maxSize int) *Semaphore {
	return &Semaphore{
		ch: make(chan struct{}, maxSize),
		wg: new(sync.WaitGroup),
	}
}

func (s *Semaphore) Add(delta int) {
	s.wg.Add(delta)
	for i := 0; i < delta; i++ {
		s.ch <- struct{}{}
	}
}

func (s *Semaphore) Done() {
	<-s.ch
	s.wg.Done()
}

func (s *Semaphore) Wait() {
	s.wg.Wait()
}
