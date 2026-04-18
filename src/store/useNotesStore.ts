import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface NotesState {
  notes: Record<string, string>;
  setNote: (fileNo: string, content: string) => void;
  getNote: (fileNo: string) => string;
}

export const useNotesStore = create<NotesState>()(
  persist(
    (set, get) => ({
      notes: {},
      setNote: (fileNo, content) => 
        set((state) => ({
          notes: { ...state.notes, [fileNo]: content }
        })),
      getNote: (fileNo) => get().notes[fileNo] || '',
    }),
    {
      name: 'damage-notes-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
