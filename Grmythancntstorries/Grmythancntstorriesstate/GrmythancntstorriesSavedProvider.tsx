import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const grmythancntstorriesStorageKey = '@grmythancntstorries/savedStoryIds';

type Ctx = {
  savedIds: Record<string, true>;
  isHydrated: boolean;
  isSaved: (id: string) => boolean;
  toggleSaved: (id: string) => void;
  setSaved: (id: string, saved: boolean) => void;
};

const GrmythancntstorriesSavedContext = createContext<Ctx | null>(null);

const grmythancntstorriesIdsToMap = (ids: string[]) => {
  const map: Record<string, true> = {};
  for (const id of ids) {
    map[id] = true;
  }
  return map;
};

const grmythancntstorriesMapToIds = (map: Record<string, true>) =>
  Object.keys(map);

export const GrmythancntstorriesSavedProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [savedIds, setSavedIds] = useState<Record<string, true>>({});
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(grmythancntstorriesStorageKey);
        if (!alive) {
          return;
        }
        if (!raw) {
          setIsHydrated(true);
          return;
        }
        const parsed = JSON.parse(raw) as unknown;
        const ids = Array.isArray(parsed)
          ? parsed.filter((x): x is string => typeof x === 'string')
          : [];
        setSavedIds(grmythancntstorriesIdsToMap(ids));
      } catch {
        console.log('error');
      } finally {
        if (alive) {
          setIsHydrated(true);
        }
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  const persist = useCallback(async (next: Record<string, true>) => {
    try {
      const ids = grmythancntstorriesMapToIds(next);
      await AsyncStorage.setItem(
        grmythancntstorriesStorageKey,
        JSON.stringify(ids),
      );
    } catch {
      console.log('error');
    }
  }, []);

  const setSaved = useCallback(
    (id: string, saved: boolean) => {
      setSavedIds(prev => {
        const next = {...prev};
        if (saved) {
          next[id] = true;
        } else {
          delete next[id];
        }
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const toggleSaved = useCallback(
    (id: string) => {
      setSavedIds(prev => {
        const next = {...prev};
        if (next[id]) {
          delete next[id];
        } else {
          next[id] = true;
        }
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const isSaved = useCallback((id: string) => !!savedIds[id], [savedIds]);

  const value = useMemo<Ctx>(
    () => ({
      savedIds,
      isHydrated,
      isSaved,
      toggleSaved,
      setSaved,
    }),
    [savedIds, isHydrated, isSaved, toggleSaved, setSaved],
  );

  return (
    <GrmythancntstorriesSavedContext.Provider value={value}>
      {children}
    </GrmythancntstorriesSavedContext.Provider>
  );
};

export const useGrmythancntstorriesSaved = () => {
  const ctx = useContext(GrmythancntstorriesSavedContext);
  if (!ctx) {
    throw new Error('error');
  }
  return ctx;
};
