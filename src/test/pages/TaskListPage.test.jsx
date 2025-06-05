import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import TaskListPage from '../../pages/TaskListPage';
import tasksReducer from '../../features/tasks/store/tasksSlice';


describe('TaskListPage', () => {
    it('debe mostrar el título y una lista de tareas simuladas', () => {
        const preloadedState = {
            tasks: {
                items: [
                    { id: '1', title: 'Tarea 1', description: 'Desc 1', status: 'pendiente' },
                    { id: '2', title: 'Tarea 2', description: 'Desc 2', status: 'completada' },
                ],
                loading: false,
            }
        };

        const store = configureStore({
            reducer: {
                tasks: tasksReducer
            },
            preloadedState
        });

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <TaskListPage />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText('Lista de Tareas')).toBeTruthy();
        expect(screen.getByText('Tarea 1')).toBeTruthy();
        expect(screen.getByText('Tarea 2')).toBeTruthy();
    });
});
