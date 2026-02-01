'use client';

import { doc, setDoc, serverTimestamp, getDoc, Firestore } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import type { School } from '@/lib/types';

/**
 * Creates a new school document in Firestore if it doesn't already exist.
 * This is intended to be called right after a new school user account is created.
 */
export async function createSchoolDocument(db: Firestore, schoolId: string, name: string, email: string) {
    const schoolRef = doc(db, 'schools', schoolId);

    try {
        const docSnap = await getDoc(schoolRef);
        if (docSnap.exists()) {
            console.warn(`School document for ${schoolId} already exists. Skipping creation.`);
            return;
        }

        const newSchool: Omit<School, 'id' | 'registrationDate'> & { registrationDate: any } = {
            name: name,
            contactEmail: email,
            registrationDate: serverTimestamp(),
        };

        // Use a non-blocking setDoc with error handling
        setDoc(schoolRef, {
            id: schoolId,
            ...newSchool
        }).catch(error => {
            // This will be caught by the global error listener
            const permissionError = new FirestorePermissionError({
                path: schoolRef.path,
                operation: 'create',
                requestResourceData: { id: schoolId, ...newSchool },
            });
            errorEmitter.emit('permission-error', permissionError);
        });

    } catch (error) {
        // Handle errors from getDoc
        console.error("Error checking for school document:", error);
        // We might want to emit a generic error here as well
    }
}
