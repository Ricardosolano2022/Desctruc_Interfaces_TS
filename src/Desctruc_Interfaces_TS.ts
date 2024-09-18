//Deconstruccion e Interfaces en TS

//Creacion de interfaces Empleado y Persona:
export interface Empleado {

    tipoContrato: string,
    eps: string,
    pension: string,
    arl: string,
    cargo: string,
    
}

export interface Persona {

    nombre: string,
    cedula: string,
    edad: string,
    profesion: string,
    empleados: Empleado[];
}

//Creacion objeto persona:

export const personas: Persona[] = [
    {
        nombre: 'Ricardo Solano',
        cedula: '9474030',
        edad: '45',
        profesion: 'Ingeniero de Sistemas',

        empleados: [{tipoContrato: 'Indefinido', eps: 'Sanitas', pension: 'Porvenir', arl: 'ARL Positiva', cargo: 'Analista'}
                    ]
    },
    {
        nombre: 'Eliana Sanchez',
        cedula: '10256874',
        edad: '39',
        profesion: 'Contadora Publica',

        empleados: [{tipoContrato: 'Termino Fijo', eps: 'Nueva EPS', pension: 'FNA', arl: 'ARL Sura', cargo: 'Coordindora'}
                   ]
    },
    {
        nombre: 'Diego Pineda',
        cedula: '25639987',
        edad: '32',
        profesion: 'Administrador',

        empleados: [{tipoContrato: 'Termino Fijo', eps: 'Sura', pension: 'Colpensiones', arl: 'ARL Bolivar', cargo: 'Asistente Administrativo'}
                   ]
    },
    ]

    


    





