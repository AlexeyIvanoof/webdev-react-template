import ReduxProvider from "@/store/ReduxProvider";
import AudioPlayer from "./AudioPlayer";
import { render } from "@testing-library/react";
 
 describe("AudioPlayer component", () => {
    it("renders correctly", () => {
      const { container } = render(
      <ReduxProvider>
        
          <AudioPlayer />
        
      </ReduxProvider>);
      expect(container).toMatchSnapshot();
    });
  }); 