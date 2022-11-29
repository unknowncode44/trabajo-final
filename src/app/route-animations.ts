import { trigger, transition, style, query, group, animateChild, animate, keyframes } from '@angular/animations'

export const fader = 
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)'

                })
            ])
        ])
    ]
);

export const slider = 
     trigger('routeAnimations', [
       transition('* => dashboard', slideTo('left'))
    ]
);


function slideTo(direction: any) {
    const optional = { optional: true }
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                width: '100%',
                [direction]: 0,
            })
        ], optional),
        query(':enter', [
            style({ [direction]: '100%' })
        ]),
        group([
            query(':leave', [
                animate('600ms ease', style({ [direction]: '-100%' }))
            ], optional),
            query(':enter', [
                animate('600ms ease', style({ [direction]: '0%' })) 
            ])
        ])
    ]
}