import express, { Request, Response } from 'express';
import Itinerary from '../models/Itinerary.js';

const router = express.Router();

// Get user itineraries
router.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const itineraries = await Itinerary.find({ userId: req.params.userId }).populate('cities');
    res.json(itineraries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch itineraries' });
  }
});

// Get single itinerary
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id).populate('cities').populate('userId');
    if (!itinerary) {
      return res.status(404).json({ error: 'Itinerary not found' });
    }
    res.json(itinerary);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch itinerary' });
  }
});

// Create itinerary
router.post('/', async (req: Request, res: Response) => {
  try {
    const itinerary = new Itinerary(req.body);
    await itinerary.save();
    res.status(201).json(itinerary);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create itinerary' });
  }
});

// Update itinerary
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const itinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!itinerary) {
      return res.status(404).json({ error: 'Itinerary not found' });
    }
    res.json(itinerary);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update itinerary' });
  }
});

// Delete itinerary
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const itinerary = await Itinerary.findByIdAndDelete(req.params.id);
    if (!itinerary) {
      return res.status(404).json({ error: 'Itinerary not found' });
    }
    res.json({ message: 'Itinerary deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete itinerary' });
  }
});

export default router;
