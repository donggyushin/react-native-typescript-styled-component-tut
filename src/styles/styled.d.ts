// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string;
    PRIMARY_BACKGROUND_COLOR: string;
    PRIMARY_TEXT_COLOR: string;
    SECONDARY_TEXT_COLOR: string;
    PRIMARY_BUTTON_COLOR: string;
    SECONDARY_BUTTON_COLOR: string;
  }
}
