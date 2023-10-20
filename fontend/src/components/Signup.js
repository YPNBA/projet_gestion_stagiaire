import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function Signup() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    // Soumettre les données au backend ici
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Créer un compte</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
              Prénom
            </label>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="border rounded px-3 py-2 w-full"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
              Nom
            </label>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="border rounded px-3 py-2 w-full"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">
              Âge
            </label>
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  className="border rounded px-3 py-2 w-full"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Numéro de téléphone
            </label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  type="tel"
                  {...field}
                  className="border rounded px-3 py-2 w-full"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  type="email"
                  {...field}
                  className="border rounded px-3 py-2 w-full"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Mot de passe (8 caractères minimum, au moins 1 chiffre et 1 caractère spécial)
            </label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  type="password"
                  {...field}
                  className="border rounded px-3 py-2 w-full"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="terms" className="block text-gray-700 text-sm font-bold mb-2">
              Conditions d'inscription
            </label>
            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
                <input
                  type="checkbox"
                  {...field}
                />
              )}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
          >
            Créer un compte
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
