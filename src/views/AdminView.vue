<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info">first-section</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-form>
              <b-form-group
                  label="Tło:"
              >
                <b-form-input
                    v-model="$store.state.data.firstSection.backgroundImage"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                  label="Nagłówek:"
              >
                <b-form-input
                    v-model="$store.state.data.firstSection.mainHeader.h2"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                  label="Paragraf:"
              >
                <b-form-textarea
                    v-model="$store.state.data.firstSection.mainHeader.p"
                ></b-form-textarea>
              </b-form-group>
              <b-row>
                <b-col class="col-8">
                  <b-form-group
                      label="Ikona telefonu:"

                  >
                    <b-form-input
                        v-model="$store.state.data.firstSection.contactIcons.telephone.telNumber"
                    ></b-form-input>
                  </b-form-group>

                </b-col>
                <b-col class="d-flex align-items-center">
                  <b-form-checkbox
                      id="checkbox-1"
                      name="checkbox-1"
                      v-model="$store.state.data.firstSection.contactIcons.telephone.show"
                  >
                    Pokaż ikonę telefonu
                  </b-form-checkbox>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="col-8">
                  <b-form-group
                      label="Ikona facebook:"
                  >
                    <b-form-input
                        v-model="$store.state.data.firstSection.contactIcons.facebook.fbUrl"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col class="d-flex align-items-center">
                  <b-form-checkbox
                      id="checkbox-2"
                      name="checkbox-2"
                      v-model="$store.state.data.firstSection.contactIcons.facebook.show"
                  >
                    Pokaż ikonę facebook
                  </b-form-checkbox>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="col-8">
                  <b-form-group
                      label="Ikona koperty:"
                  >
                    <b-form-input
                        v-model="$store.state.data.firstSection.contactIcons.envelope.mail"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col class="d-flex align-items-center">
                  <b-form-checkbox
                      id="checkbox-3"
                      name="checkbox-3"
                      v-model="$store.state.data.firstSection.contactIcons.envelope.show"
                  >
                    Pokaż ikonę koperty
                  </b-form-checkbox>
                </b-col>
              </b-row>

            </b-form>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info">other-projects</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-form>
              <b-form-group
                  label="Nagłówek"
              >
                <b-form-input
                    v-model="$store.state.data.otherProjects.header.h2"
                ></b-form-input>
              </b-form-group>
              <div class="my-5" v-for="(item, index) in $store.state.data.otherProjects.gallery"
                   :key="item.galleryTitle">
                <b-form-group
                    :label="'Url zdjęcia nr ' + (index + 1)"
                >
                  <b-form-input
                      v-model="$store.state.data.otherProjects.gallery[index].galleryImage.imageUrl"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                    :label="'Tytuł zdjęcie nr ' + (index + 1)"
                >
                  <b-form-input
                      v-model="$store.state.data.otherProjects.gallery[index].galleryTitle.p"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                    :label="'Tekst alternatywny zdjęcie nr ' + (index + 1)"
                >
                  <b-form-input
                      v-model="$store.state.data.otherProjects.gallery[index].galleryImage.imageAlt"
                  ></b-form-input>
                </b-form-group>
              </div>
              <b-button @click="addNewGalleryItem">+</b-button>
            </b-form>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info">parallax</b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-form>
              <b-form-group
                label="Tło"
              >
                <b-form-input
                  v-model="$store.state.data.parallax.backgroundImage"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group
                  label="Logo"
              >
                <b-form-input
                    v-model="$store.state.data.parallax.logoUrl"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group
                  label="Nazwa przycisku"
              >
                <b-form-input
                    v-model="$store.state.data.parallax.button.buttonName"
                >
                </b-form-input>
              </b-form-group>
            </b-form>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-4 variant="info">how-we-work</b-button>
        </b-card-header>
        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-form>
              <b-form-group
                label="Nagłówek"
              >
                <b-form-input
                  v-model="$store.state.data.howWeWork.header.h1"
                ></b-form-input>
              </b-form-group>
              <div class="my-5" v-for="(item, index) in $store.state.data.howWeWork.folders" :key="item.h2">
                <b-form-group
                    :label="'Folder ' + (index + 1) + ' - Nagłówek'"
                >
                  <b-form-input
                      v-model="$store.state.data.howWeWork.folders[index].h2"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Tekst folderu"
                >
                  <b-form-textarea
                      v-model="$store.state.data.howWeWork.folders[index].p"
                  ></b-form-textarea>
                </b-form-group>
              </div>
              <b-button @click="addNewFolderItem">+</b-button>
            </b-form>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-5 variant="info">parallax</b-button>
        </b-card-header>
        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-6 variant="info">parallax</b-button>
        </b-card-header>
        <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-7 variant="info">parallax</b-button>
        </b-card-header>
        <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-8 variant="info">parallax</b-button>
        </b-card-header>
        <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>

    <b-button :to="{name:'home'}">Sprawdź</b-button>
  </div>
</template>

<script>
export default {
  name: "AdminView",
  data() {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
    }
  },
  methods: {
    addNewGalleryItem() {
      const example = {
        galleryImage: {
          imageUrl: 'assets/img/foto1.png',
          imageAlt: 'Obraz przedstawiający pięknie wykończoną kuchnię z drewna'
        },
        galleryTitle: {
          p: 'Kuchnie'
        }
      };
      this.$store.state.data.otherProjects.gallery.push(example)
    },
    addNewFolderItem() {
      const example = {
        h2: 'Montaż Twojej kuchni',
        p: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet'
      }
      this.$store.state.data.howWeWork.folders.push(example)
    }
  }
}
</script>

<style scoped src="bootstrap/dist/css/bootstrap.css"></style>
<style scoped src="bootstrap-vue/dist/bootstrap-vue.css"></style>4
<style scoped>
div {
  /*border: 1px solid black;*/
}
</style>